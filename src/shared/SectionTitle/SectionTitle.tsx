
type TSectionTitle = {
    Title: string,
}

const SectionTitle = ({ Title} : TSectionTitle) => {
    return (
        <div className=' text-left bg-[#003D5F] px-2 py-1 text-white my-4'>
            <h3 className='capitalize font-semibold text-3xl'>{Title}</h3>
        </div>
    );
};

export default SectionTitle;