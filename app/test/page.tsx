import { createClient } from '@/utils/supabase/client';

export default function Main() {
  async function loadDb() {
    const supabase = createClient();
    //supabase.from('이곳에 테이블의 이름을 넣는다')
    //develop-test-add
  }
  return <div>text</div>;
}
