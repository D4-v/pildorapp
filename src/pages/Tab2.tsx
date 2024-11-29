import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonInput, IonLabel, IonItem, IonSelect, IonSelectOption, IonDatetime } from '@ionic/react';
import './Tab2.css';//para importar css/
const VehicleRentalCard: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle className="header-title">Alquiler de Vehículos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding rental-content">
        <IonCard className="rental-card">
          <img 
            alt="Vehículo para alquilar" 
            src="https://images.pexels.com/photos/7144203/pexels-photo-7144203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          />
          <IonCardHeader>
            <IonCardTitle>Renta el vehículo perfecto</IonCardTitle>
            <IonCardSubtitle>Fácil, rápido y seguro</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            <form className="rental-form">
              <IonItem>
                <IonLabel position="stacked">Selecciona el vehículo</IonLabel>
                <IonSelect placeholder="Tipo de vehículo">
                  <IonSelectOption value="auto">Automóvil</IonSelectOption>
                  <IonSelectOption value="moto">Motocicleta</IonSelectOption>
                  <IonSelectOption value="camioneta">Camioneta</IonSelectOption>
                </IonSelect>
              </IonItem>

    
              <IonItem>
                <IonLabel position="stacked">Ubicación de recogida</IonLabel>
                <IonInput type="text" placeholder="Ingresa la dirección de recogida"></IonInput>
              </IonItem>

              <IonItem>
                <IonLabel position="stacked">Nombre completo</IonLabel>
                <IonInput type="text" placeholder="Escribe tu nombre"></IonInput>
              </IonItem>

              <IonItem>
                <IonLabel position="stacked">Correo electrónico</IonLabel>
                <IonInput type="email" placeholder="Escribe tu correo"></IonInput>
              </IonItem>

              <IonButton expand="block" color="success" className="submit-button">
                Buscar
              </IonButton>
            </form>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default VehicleRentalCard;