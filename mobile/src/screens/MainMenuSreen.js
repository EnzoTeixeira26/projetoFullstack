import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

const MainMenuScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.address}>Endereço</Text>
                <TouchableOpacity style={styles.messageIcon}>
                    <Image
                        source={require('../../assets/email.png')}
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.containerRow}>
                <TouchableOpacity style={styles.containerRestaurantes} onPress={() => console.log("Restaurante A Pressionado")}>
                    <Text style={styles.restaurantText}>Restaurante A</Text>
                    <Image
                        source={require('../../assets/restaurante.png')}
                        style={styles.restaurantImage}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.containerMercados} onPress={() => console.log("Mercados Pressionado")}>
                    <Text style={styles.marketText}>Mercados</Text>
                    <Image
                        source={require('../../assets/mercado.png')}
                        style={styles.marketImage}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.containerRow}>
                <TouchableOpacity style={styles.smallContainer} onPress={() => console.log("Restaurante C Pressionado")}>
                    <Image
                        source={require('../../assets/restauranteC.png')}
                        style={styles.smallImage}
                    />
                    <Text style={styles.smallText}>Restaurante C</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.smallContainer} onPress={() => console.log("Restaurante D Pressionado")}>
                    <Image
                        source={require('../../assets/restauranteD.png')}
                        style={styles.smallImage}
                    />
                    <Text style={styles.smallText}>Restaurante D</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.smallContainer} onPress={() => console.log("Cupons Pressionado")}>
                    <Image
                        source={require('../../assets/copons.png')}
                        style={styles.smallImage}
                    />
                    <Text style={styles.smallText}>Cupons</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.smallContainer} onPress={() => console.log("Ver mais Pressionado")}>
                    <Image
                        source={require('../../assets/vermais.png')}
                        style={styles.smallImage}
                    />
                    <Text style={styles.smallText}>Ver mais</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.promoText}>Taxa na Faixa - Bebidas</Text>

            <View style={styles.circleRow}>
                <TouchableOpacity style={styles.circleButton} onPress={() => console.log("Bebida 1 Pressionada")}>
                    <Image
                        source={require('../../assets/bebida1.png')}
                        style={styles.circleImage}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.circleButton} onPress={() => console.log("Bebida 2 Pressionada")}>
                    <Image
                        source={require('../../assets/bebida2.png')}
                        style={styles.circleImage}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.circleButton} onPress={() => console.log("Bebida 3 Pressionada")}>
                    <Image
                        source={require('../../assets/bebida3.png')}
                        style={styles.circleImage}
                    />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.mediumButton} onPress={() => console.log("Botão Médio Pressionado")}>
                <Image
                    source={require('../../assets/oferta.png')}
                    style={styles.mediumButtonImage}
                />
            </TouchableOpacity>
            <View style={styles.bottomNav}>
                <TouchableOpacity
                    style={styles.navItem}
                    onPress={() => navigation.navigate('MainMenu')} 
                >
                    <Image
                        source={require('../../assets/home.png')}
                        style={styles.navIcon}
                    />
                    <Text style={styles.navText}>Início</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.navItem}
                    onPress={() => navigation.navigate('Search')} 
                >
                    <Image
                        source={require('../../assets/lupa.png')}
                        style={styles.navIcon}
                    />
                    <Text style={styles.navText}>Busca</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.navItem}
                    onPress={() => navigation.navigate('Meus Pedidos')} 
                >
                    <Image
                        source={require('../../assets/order.png')}
                        style={styles.navIcon}
                    />
                    <Text style={styles.navText}>Pedidos</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.navItem}
                    onPress={() => navigation.navigate('Meu Perfil')} 
                >
                    <Image
                        source={require('../../assets/profile.png')}
                        style={styles.navIcon}
                    />
                    <Text style={styles.navText}>Perfil</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    address: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
    },
    messageIcon: {
        padding: 5,
    },
    icon: {
        width: 24,
        height: 24,
    },
    containerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 10,
        marginBottom: 20,
        paddingRight: 10,
    },
    containerRestaurantes: {
        width: '48%',
        height: 100,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
    },
    containerMercados: {
        width: '48%',
        height: 100,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
    },
    restaurantText: {
        fontSize: 16,
        fontWeight: 'bold',
        flex: 1,
    },
    marketText: {
        fontSize: 16,
        fontWeight: 'bold',
        flex: 1,
    },
    restaurantImage: {
        width: 60,
        height: 60,
        borderRadius: 10,
        marginLeft: 10,
    },
    marketImage: {
        width: 60,
        height: 60,
        borderRadius: 10,
        marginLeft: 10,
    },
    smallContainer: {
        width: '23%',
        height: 100,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
    },
    smallImage: {
        width: 50,
        height: 50,
        borderRadius: 10,
    },
    smallText: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 5,
        textAlign: 'center',
    },
    promoText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 10,
        textAlign: 'center',
    },
    circleRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    circleButton: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#ccc',
    },
    circleImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    mediumButton: {
        marginTop: 20,
        marginHorizontal: 20,
        height: 300, // Altura maior para o botão médio
        borderRadius: 5,
        overflow: 'hidden', 
    },
    mediumButtonImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        height: 100,
    },
    navItem: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    navIcon: {
        width: 24,
        height: 24,
        marginBottom: 2,
    },
    navText: {
        fontSize: 12,
        color: '#333',
    },
});

export default MainMenuScreen;
