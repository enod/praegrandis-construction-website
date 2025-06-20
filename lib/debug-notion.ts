/**
 * Debug utility to check Notion configuration
 */
export function debugNotionConfig() {
  console.log('=== Notion Debug Info ===');
  console.log('Environment:', process.env.NODE_ENV);
  console.log('NOTION_TOKEN available:', !!process.env.NOTION_TOKEN);
  console.log('NOTION_DATABASE_ID available:', !!process.env.NOTION_DATABASE_ID);
  
  if (process.env.NOTION_TOKEN) {
    console.log('NOTION_TOKEN length:', process.env.NOTION_TOKEN.length);
    console.log('NOTION_TOKEN starts with:', process.env.NOTION_TOKEN.substring(0, 10) + '...');
  }
  
  if (process.env.NOTION_DATABASE_ID) {
    console.log('NOTION_DATABASE_ID length:', process.env.NOTION_DATABASE_ID.length);
    console.log('NOTION_DATABASE_ID preview:', process.env.NOTION_DATABASE_ID.substring(0, 8) + '...');
  }
  
  console.log('=== End Notion Debug ===');
}