// #1 Importamos todos aquello que vamos a usar
import { Button, Text, View, StyleSheet } from 'react-native';
import { ReviewPage } from './ReviewPage';
// Native-Base

// #3 Creamos nuestro arrowFunction
export const HomeScreen = ({ navigation: { navigate } }:any) => {
    return (
      <View style={ styles.container }>
        <Text style={ styles.text } >Ventana principal</Text>
        <Button
          onPress={() =>
            navigate('Review', { names: ['Alin', 'Abril', 'Rafael'] })
          }
          title="Cargar datos"
        />
      </View>
    );
  }
   


const styles = StyleSheet.create({

    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    text: {
        fontSize: 20, 
        marginBottom: 12,
    }

});

// export const HomePage = ({navigation}:any) => {

//     // TEXTO
//     const [inputValue, setInputValue] = useState('');

//     // CHECKBOX
//     const [value, setValue] = useState('one');

//     // #6 Para toast
//     // const toast = useToast();

//     // const navigation = useNavigation();
//     // const navigationRef = React.createRef();

//     //  const register = () => {
//     //          navigation.navigate(ReviewPage, {
//     //              inputValue: inputValue,
//     //              value: value,
//     //          });       
//     //  }

//     return (
//         // #15 Caja general para los componentes
//         <Box>
//             {/* #16 Cabecera  */}
//             <Heading mb="2" size="md">
//                 Tareas
//             </Heading>
//             <VStack>
//                 <Box>
//                     <HStack space={2} h={8} mb={4} >
//                         {/* #18 Input de texto */}
//                         <Input 
//                             flex={1}
//                             // ***************************************
//                             onChangeText={ ( text ) => setInputValue(text) }
//                             // **************************************
//                             value={ inputValue }
//                             placeholder="Agregar"
//                         />
//                         {/* #21 BTN + */}
//                         <IconButton 
//                             borderRadius="sm"
//                             variant="solid"
//                             icon={ <AddIcon size={4} /> }
//                             // ******************************************
//                             onPress={ () => navigation.navigate('ReviewPage') }
//                         />
//                     </HStack>
//                 </Box>
//                 <Radio.Group
//                     name="myRadioGroup"
//                     // ***************************
//                     value={value}
//                     //**************************************** 
//                     onChange={(nextValue) => {
//                         setValue(nextValue);
//                     }}
//                 >
//                     <Radio value="one" my="1"> One </Radio>
//                     <Radio value="two" my="1"> Two </Radio>
//                 </Radio.Group>
//             </VStack>
//         </Box>
//     );
// }
