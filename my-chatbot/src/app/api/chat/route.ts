// 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

import { NextResponse,NextRequest } from 'next/server';

// import { getChatResponse } from '@/app/lib/langchain';
import { getChatResponse } from '@/app/lib/langchain/getChatResponse';

export async function POST(req: NextRequest) {
    try {
      const body = await req.json(); 
     
  
      const userMessage = body.message; 
     
  
      if (!userMessage) {
        
        return NextResponse.json({ error: 'Message is required' }, { status: 400 });
      }
  
      const response = await getChatResponse(userMessage); 
      
  
      return NextResponse.json({ response }); 
    
    } catch (error) {
      console.error('Error in API:', error); 
   
  
      return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
     
    }
  }