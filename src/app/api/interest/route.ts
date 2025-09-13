import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const interestSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  organization: z.string().min(2),
  interestType: z.enum(['participant', 'media', 'supporter', 'speaker', 'other']),
  comments: z.string().optional()
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = interestSchema.parse(body)
    
    // Check if email already exists
    const existingForm = await prisma.interestForm.findFirst({
      where: { email: validatedData.email }
    })
    
    if (existingForm) {
      // Update existing form instead of creating duplicate
      const updatedForm = await prisma.interestForm.update({
        where: { id: existingForm.id },
        data: {
          fullName: validatedData.fullName,
          organization: validatedData.organization,
          interestType: validatedData.interestType,
          comments: validatedData.comments,
          updatedAt: new Date()
        }
      })
      
      return NextResponse.json({ 
        success: true, 
        message: 'Interest updated successfully',
        id: updatedForm.id 
      })
    }
    
    // Create new interest form
    const interestForm = await prisma.interestForm.create({
      data: validatedData
    })
    
    return NextResponse.json({ 
      success: true, 
      message: 'Interest registered successfully',
      id: interestForm.id 
    })
    
  } catch (error) {
    console.error('Error processing interest form:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid form data',
          details: error.errors 
        },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error' 
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const count = await prisma.interestForm.count()
    
    return NextResponse.json({ 
      success: true,
      count,
      message: `${count} people have registered their interest` 
    })
    
  } catch (error) {
    console.error('Error getting interest count:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error' 
      },
      { status: 500 }
    )
  }
}