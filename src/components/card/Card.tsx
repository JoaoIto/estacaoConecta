interface CardProps {
    titulo: string;
    descricao: string;
}

function Card({ titulo, descricao }: CardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-xl font-semibold mb-2">{titulo}</h3>
            <p className="text-gray-700">{descricao}</p>
        </div>
    );
}

export default Card;
