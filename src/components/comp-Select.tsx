// const Select = () => {
//   const [visible, setVisible] = useState(false);
//   const [value, setValue] = useState();

//   const mock = () => {
//     return Array(4)
//       .fill(null)
//       .map((_, i) => ({
//         label: 'label' + i,
//         value: i,
//       }));
//   };

//   const handlePress = (value: any) => {
//     setValue(value);
//     setVisible(false);
//   };

//   return (
//     <>
//       <Pressable
//         onPress={() => setVisible(prev => !prev)}
//         style={{
//           flexDirection: 'row',
//           alignItems: 'center',
//           borderWidth: 1,
//           borderRadius: 4,
//           padding: 8,
//           height: 48,
//         }}>
//         <Text>{value}</Text>
//       </Pressable>
//       <Modal visible={visible} transparent={true}>
//         <Pressable
//           onPress={() => setVisible(false)}
//           style={{
//             flex: 1,
//             justifyContent: 'flex-end',
//             backgroundColor: '#000000aa',
//           }}>
//           <View
//             style={{
//               backgroundColor: '#fff',
//               borderRadius: 4,
//             }}>
//             {/* {mock().map(({label, value}) => {
//                 return (
//                   <Pressable
//                     onPress={() => handlePress(value)}
//                     style={{
//                       padding: 8,
//                       height: 48,
//                       justifyContent: 'center',
//                       alignItems: 'center',
//                     }}>
//                     <Text>{label}</Text>
//                   </Pressable>
//                 );
//               })} */}
//           </View>
//         </Pressable>
//       </Modal>
//     </>
//   );
// };
