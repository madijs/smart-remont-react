import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import MainContainer from "./components/Container/MainContainer";
import Content from "./components/Content/Content";

export default class App extends Component{
  state = {
      repairData:[
          this.createRepair(1,'Smart Comfort','ЖК Бриллиантовый',
              'Делали ремонт не по нашему проекту,а реализовали чужой проект.Это был длительный ремонт.' +
              'Высота потолков 3 метра.Использовали декоративный кирпич.Декоративные штукатурки.На полу паркет.' +
              'Душевую делали из мозаики.','Нур-Султан,ул.Академика,40',
              [
                  'https://www.rutage.com/wp-content/uploads/2019/06/interior-2685522-1080x608.jpg',
                  'https://www.eremont.ru/upload/iblock/424/Zona_gostinoy_i_stolovoy_v_stile_sovremennaya_klassika_s_belymi_divanami_i_golubymi_shtorami.jpg',
                  'https://smartremont.kz/design/img/solutions/loft/Render__View120012_JPEG.jpg'
                    ]
          ),
          this.createRepair(2,'Smart Express','ЖК Хрустальный',
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque beatae commodi cum','Алматы,ул.Жибек жолы 81',
              [
                  'https://smartremont.kz/design/img/solutions/neo/hall_3.jpg',
                  'https://smartremont.kz/design/img/solutions/scan/Render__View040004_JPEG.jpg',
                  'https://weproject.media/upload/iblock/35d/35ddca63a17c2a8d6c7541b304022ffc.jpg'
              ]),
          this.createRepair(3,'Smart Vip','ЖК Металлический',
              'dolor doloribus ea fuga harum labore, ' +
              'laudantium maxime minima molestias obcaecati officia ' +
              'repellendus saepe voluptas. Corporis, molestias.\n','Алматы,ул.Сайран,51',
              [
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwjOBTGakkWnEsVSAWpF8umzCF2tZ3oAAgxw&usqp=CAU',
                  'https://lh3.googleusercontent.com/proxy/3UJv99-FWNZy9tnrzmGWHhJd1a8wHEDNNzobC5ZedGJAgYVf8WVPxLAb7-55SQrd2RnTeEQORhukEtLmRbS8DAIzGyXAEliqhTTqlBo21nFogniqZXhJG38aH9zF',
                  'https://lh3.googleusercontent.com/proxy/h_VszxlnLKRHUZI9VyHnRI2cyAWDFtgcB8LFSLFg3q-lrZtpp31ehe_s_dqV3OHDM_S64rYIcaSGe-bopTsfyMsjeUe6CA3iGZzNvej-cPc6bz-2hVRL'
              ]),
          this.createRepair(4,'Smart Comfort','ЖК Нефритовый',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.','Нур-Султан,ул.Академика,40',
              [
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwjOBTGakkWnEsVSAWpF8umzCF2tZ3oAAgxw&usqp=CAU',
                  'https://lh3.googleusercontent.com/proxy/3UJv99-FWNZy9tnrzmGWHhJd1a8wHEDNNzobC5ZedGJAgYVf8WVPxLAb7-55SQrd2RnTeEQORhukEtLmRbS8DAIzGyXAEliqhTTqlBo21nFogniqZXhJG38aH9zF',
                  'https://lh3.googleusercontent.com/proxy/h_VszxlnLKRHUZI9VyHnRI2cyAWDFtgcB8LFSLFg3q-lrZtpp31ehe_s_dqV3OHDM_S64rYIcaSGe-bopTsfyMsjeUe6CA3iGZzNvej-cPc6bz-2hVRL'
              ]),
          this.createRepair(5,'Smart Comfort','ЖК Гаухартас',
              'Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Nisi lacus sed viverra tellus in hac. Dictum at tempor commodo ullamcorper a lacus vestibulum sed. Faucibus vitae aliquet nec ullamcorper sit.','Нур-Султан,ул.Академика,40',[
                  'https://www.archrevue.ru/images/tb/3/3/7/33770/15554119081221_w800h500.jpg',
                  'https://i0.wp.com/www.mdveri.com.ua/wp-content/uploads/2016/09/%D0%A1%D0%BC%D0%B0%D1%80%D1%82-19-%D0%BC.jpg?fit=737%2C363&ssl=1',
                  'https://i.pinimg.com/originals/13/db/93/13db93a49bd7baf68d8c1bb04a454e3e.jpg'
              ]),
          this.createRepair(6,'Smart Comfort','ЖК Жастар',
              'Proin nibh nisl condimentum id venenatis a condimentum. Velit scelerisque in dictum non. Amet volutpat consequat mauris nunc congue nisi. Porttitor leo a diam sollicitudin tempor. Ultricies lacus sed turpis tincidunt id aliquet risus.','Нур-Султан,ул.Академика,40',[
                  'https://www.rutage.com/wp-content/uploads/2019/06/interior-2685522-1080x608.jpg',
                  'https://www.eremont.ru/upload/iblock/424/Zona_gostinoy_i_stolovoy_v_stile_sovremennaya_klassika_s_belymi_divanami_i_golubymi_shtorami.jpg',
                  'https://smartremont.kz/design/img/solutions/loft/Render__View120012_JPEG.jpg'
              ]),
          this.createRepair(7,'Smart Comfort','ЖК Жасулан',
              'Placerat duis ultricies lacus sed turpis tincidunt id. Vestibulum lorem sed risus ultricies. At augue eget arcu dictum.','Нур-Султан,ул.Академика,40',[
                  'https://vn.com.ua/Media/images/news/big/217c257016d11095baf9aac77e2f105c.jpg',
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQm7jXm0Yi-JuLEvmYjqPaV0CtjAzvxDn12PA&usqp=CAU',
                  'https://svitlitskogo.com.ua/img/after2.jpg'
              ]),
          this.createRepair(8,'Smart Comfort','ЖК Кирпичный',
              'Cras pulvinar mattis nunc sed blandit libero volutpat sed. At tempor commodo ullamcorper a lacus. Ullamcorper sit amet risus nullam eget felis.','Нур-Султан,ул.Академика,40',[
                  'https://www.rutage.com/wp-content/uploads/2019/06/interior-2685522-1080x608.jpg',
                  'https://www.eremont.ru/upload/iblock/424/Zona_gostinoy_i_stolovoy_v_stile_sovremennaya_klassika_s_belymi_divanami_i_golubymi_shtorami.jpg',
                  'https://smartremont.kz/design/img/solutions/loft/Render__View120012_JPEG.jpg'
              ]),
          this.createRepair(9,'Smart Comfort','ЖК Бизнес',
              'Eget mauris pharetra et ultrices neque ornare aenean euismod. Amet consectetur adipiscing elit ut aliquam purus sit amet. Ipsum a arcu cursus vitae. Potenti nullam ac tortor vitae purus faucibus. Eget mi proin sed libero.','Нур-Султан,ул.Академика,40',[
                  'https://www.rutage.com/wp-content/uploads/2019/06/interior-2685522-1080x608.jpg',
                  'https://www.eremont.ru/upload/iblock/424/Zona_gostinoy_i_stolovoy_v_stile_sovremennaya_klassika_s_belymi_divanami_i_golubymi_shtorami.jpg',
                  'https://smartremont.kz/design/img/solutions/loft/Render__View120012_JPEG.jpg'
              ]),
          this.createRepair(10,'Smart Comfort','ЖК Крутой',
              'Sit amet est placerat in egestas erat. Ultrices sagittis orci a scelerisque purus semper eget. Volutpat commodo sed egestas egestas fringilla phasellus. In eu mi bibendum neque.','Нур-Султан,ул.Академика,40',[
                  'https://www.rutage.com/wp-content/uploads/2019/06/interior-2685522-1080x608.jpg',
                  'https://www.eremont.ru/upload/iblock/424/Zona_gostinoy_i_stolovoy_v_stile_sovremennaya_klassika_s_belymi_divanami_i_golubymi_shtorami.jpg',
                  'https://smartremont.kz/design/img/solutions/loft/Render__View120012_JPEG.jpg'
              ]),
          this.createRepair(11,'Smart Comfort','ЖК Аспирин',
              'Aliquam purus sit amet luctus venenatis lectus magna. Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet. Curabitur vitae nunc sed velit dignissim sodales ut.','Нур-Султан,ул.Академика,40',[
                  'https://www.rutage.com/wp-content/uploads/2019/06/interior-2685522-1080x608.jpg',
                  'https://www.eremont.ru/upload/iblock/424/Zona_gostinoy_i_stolovoy_v_stile_sovremennaya_klassika_s_belymi_divanami_i_golubymi_shtorami.jpg',
                  'https://smartremont.kz/design/img/solutions/loft/Render__View120012_JPEG.jpg'
              ]),
      ],
      repairTypes:['Smart Comfort','Smart Express','Smart Vip'],
      currentRepairs:[],
      selectedRepair:{},
      isSearch:false
  };

  createRepair(id,type,title,description,location,images){
      return{
          id:id,
          type:type,
          title:title,
          description:description,
          location:location,
          images:images
      }
  }

  setCurrentRepair(type){
      if(type === "0"){
          this.setState({
              currentRepairs: [],
              isSearch:false,
          })
      }else{
          const repair = this.state.repairData.filter(el=>type === el.type)
          this.setState({
              currentRepairs: repair,
              isSearch:true,
          })
      }
  }

  setSelectedRepair(el){
      this.setState({
          selectedRepair:el
      })
  }

  render() {

      const {repairData,currentRepairs,repairTypes,isSearch,selectedRepair} = this.state

      return (
          <div className="App">
              <MainContainer>
                  <Header/>
                  <Content
                      setSelectedRepair={this.setSelectedRepair.bind(this)}
                      selectedRepair={selectedRepair}
                      isSearch={isSearch}
                      repairTypes={repairTypes}
                      repairData={repairData}
                      currentRepairs={currentRepairs}
                      setCurrentRepair={this.setCurrentRepair.bind(this)}
                  />
              </MainContainer>
          </div>
      );
  }
}

