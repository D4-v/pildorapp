//import React from 'react';
import { IonContent, IonHeader, IonPage,IonImg, IonTitle, IonToolbar,IonButton,IonDatetime,IonInput, IonItem, IonList,IonButtons, IonModal } from '@ionic/react';//importar ionlist, y demás
import React, { useState } from 'react';//quitar si se jode

import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';


//<IonTitle className="header-title">Alquiler de Vehículos</IonTitle>

const Tab1: React.FC = () => {
const [isOpen, setIsOpen] = useState(false);//funcion
  return (
    <IonPage>
      <IonHeader>
      <IonToolbar className='toolbar'  color="primary">
        
          <IonTitle className="titulo">Rents</IonTitle>
          <IonItem className='item'>
          <IonInput className="input" label="Busca un vehiculo" placeholder="Buscar" ></IonInput>
          </IonItem>
          
          
          
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

      <IonImg
      src="https://www.lifewire.com/thmb/Pfr8XIxLR_G8ZbonSRefcw1jzm8=/4948x2480/filters:fill(auto,1)/mapsdirectionspart1-56cd4d395f9b5879cc5bd51a.png"
      alt="The Wisconsin State Capitol building in Madison, WI at night"
    ></IonImg>
  
    <IonContent className="ion-padding">
        <IonButton expand="block" onClick={() => setIsOpen(true)}>
          Buscar vehiculos en la zona
        </IonButton>
        <IonModal isOpen={isOpen}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Vehiculos cercanos</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
          
            <p>
              Actualmente no se encuentra ningun vehiculo en la zona, intente buscar en un lugar en especifico
            </p>
            <IonInput className="input" placeholder="Direccion" ></IonInput>
            <IonButton expand="block" onClick={() => setIsOpen(true)}>
          Buscar vehiculo en esta direccion
        </IonButton>
          </IonContent>
          
          
        </IonModal>
      </IonContent>
  

  
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
      
    </IonPage>
  );
};


export default Tab1;
