import './style.css'
import { Tabs } from 'antd-mobile'
import { useTabs } from './useTabs'
import HomeList from './HomeList'
const Home = () => {
  let { channels } = useTabs()
  return (
    <div>
      <div className='tabContainer'>
        <Tabs defaultActiveKey={'0'}>
          {
            channels.map(item => (
              <Tabs.Tab title={item.name} key={item.id}>
                {/* list 组件 */}
                {/* 别忘了加上类名 严格控制滚动盒子 */}
                <div className='listContainer'>
                  <HomeList channelId={'' + item.id} />
                </div>
              </Tabs.Tab>
            )
            )
          }
        </Tabs>
      </div>
    </div>
  )
}
export default Home