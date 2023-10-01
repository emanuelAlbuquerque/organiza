import {React, useState} from "react";

import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";


const InvestmentCard = props => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const [principal, setPrincipal] = useState('');
    const rate = 0.05;
    const [time, setTime] = useState('');
    const [result, setResult] = useState('');

    const handlePrincipalChange = (e) => {
        setPrincipal(e.target.value);
    };

    const handleTimeChange = (e) => {
        setTime(e.target.value);
    };


    const calculateCompoundInterest = () => {
        const p = parseFloat(principal);
        const r = rate;
        const t = parseFloat(time);
        const n = 12; 
        const resultAmount = p * Math.pow(1 + r, n * t);
    
        setResult(`O Investimento após ${t} anos renderá R$ ${resultAmount.toFixed(2)}`);
    };

    return (
        <div className="w-full max-w-5xl m-auto mt-8">
            <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">Qual valor você gostaria de investir?</p>
                    <Input
                        type="number"
                        placeholder="0.00"
                        value={principal}
                        onChange={(e) => setPrincipal(parseFloat(e.target.value))}
                        labelPlacement="outside"
                        startContent={
                            <div className="pointer-events-none flex items-center">
                                <span className="text-default-400 text-small">R$:</span>
                            </div>
                        }
                    />
                    <p className="text-tiny uppercase font-bold">Por quantos anos você pretende deixar esse dinheiro investido?</p>
                    <Input
                        type="number"
                        placeholder="0"
                        value={time}
                        onChange={(e) => setTime(parseInt(e.target.value))}
                        labelPlacement="outside"
                    />

                    <>
                        <Button onPress={onOpen} onClick={calculateCompoundInterest}>Proximo</Button>
                        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                            <ModalContent>
                            {(onClose) => (
                                <>
                                <ModalHeader className="flex flex-col gap-1">Investindo na UNABANCK</ModalHeader>
                                <ModalBody>
                                    <p> 
                                    Na Unibanck, quando você decide investir {principal} reais, ao longo de um período de {time} anos, você pode esperar um rendimento de {result} reais.
                                    Isso demonstra como nossas opções de investimento podem ajudar você a alcançar seus objetivos financeiros de forma eficaz e rentável.
                                    </p>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                    </Button>
                                    <Button color="primary" onPress={onClose}>
                                    Action
                                    </Button>
                                </ModalFooter>
                                </>
                            )}
                            </ModalContent>
                        </Modal>
                    </>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="/images/hero-card-complete.jpeg"
                    width={270}
                    />
                </CardBody>
            </Card>
        </div>
        
    )
}

export { InvestmentCard }
