import {
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonItem, 
    IonLabel, 
    IonDatetime,
    IonList,
    IonInput,
    IonToggle,
    IonRadioGroup,
    IonRadio
} from '@ionic/react';
import React from 'react';

const Components: React.FunctionComponent = () => {

    const d = new Date();
    let currentDate = `${ d.getFullYear() }-${ d.getMonth()+1 }-${ d.getDate() }`;

   
    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Components Experiment</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <p>IonDatetime Component tests</p>
                <IonItem>
                    <IonLabel>MMMM</IonLabel>
                    <IonDatetime displayFormat="MMMM" value={currentDate}>
                    </IonDatetime>
                </IonItem>
                <IonItem>
                    <IonLabel>MM DD YY</IonLabel>
                    <IonDatetime displayFormat="MM DD YY" value={currentDate}>
                    </IonDatetime>
                </IonItem>
            </IonContent>
            <IonContent className="ion-padding">
                <p>IonList Component tests</p>
                <IonList>
                    <IonItem>
                        <IonLabel>Test Label</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Input</IonLabel>
                        <IonInput></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Toggle</IonLabel>
                        <IonToggle ></IonToggle>
                    </IonItem>
                    <IonRadioGroup>
                        <IonItem>
                            <IonLabel>Option 1</IonLabel>
                            <IonRadio value="1"></IonRadio>
                        </IonItem>
                        <IonItem>
                            <IonLabel>Option 2</IonLabel>
                            <IonRadio value="2"></IonRadio>
                        </IonItem>
                    </IonRadioGroup>
                </IonList>
            </IonContent>
        </>
    )
}

export default Components;