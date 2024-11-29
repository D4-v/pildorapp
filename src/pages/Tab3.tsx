import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonList, IonItem, IonLabel } from '@ionic/react';
import { useHistory } from 'react-router-dom';

import './Tab3.css';//para importar css/

const VehicleDetails: React.FC = () => {
  const history = useHistory();

  const handleReserve = () => {
    history.push('/reserve'); // Navega a la página de reservación
  };

  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle className="header-title">Detalles del Vehículo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding vehicle-details-content">
        <IonCard className="vehicle-card">
          <img 
            alt="Vehículo disponible" 
            src="https://images.pexels.com/photos/1077785/pexels-photo-1077785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            className="vehicle-image"
          />
          <IonCardHeader>
            <IonCardTitle>Ford Explorer 2023</IonCardTitle>
            <IonCardSubtitle>SUV de lujo</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            <p className="vehicle-description">
              La Ford Explorer 2023 es una SUV espaciosa y cómoda, equipada con las últimas tecnologías de seguridad, ideal para viajes largos y terrenos difíciles.
              

              Motor 2.3L EcoBoost® turbo, que genera 300 hp y 420 Nm de torque.
              Transmisión automática inteligente de 10 velocidades.
              Sistema de tracción inteligente 4WD con la plataforma de tracción trasera mejorada, lo que optimiza la maniobrabilidad y el espacio interior


            </p>

            <IonList>
              <IonItem>
                <IonLabel>Capacidad: 7 pasajeros</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Transmisión: Automática</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Combustible: Gasolina</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Consumo: 10 km/L</IonLabel>
              </IonItem>
            </IonList>

            <IonButton expand="block" color="success" className="reserve-button" onClick={handleReserve}>
              Reservar este vehículo
            </IonButton>

          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default VehicleDetails;