'use client'
import Select from 'react-select';
import useSelectCountries from '../hooks/useSelectCountries';

export type SelectCountryValue = {
    label: string;
    value: string;
}

interface SelectCountryProps {
    value?: SelectCountryValue;
    onChange: (value: SelectCountryValue) => void;
}

const SelectCountry: React.FC<SelectCountryProps> = ({
    value, onChange
}) => {
    const { getAll } = useSelectCountries();
    return (
        <>
            <Select 
                isClearable
                placeholder='Anywhere'
                options={getAll()}
                onChange={(value) => onChange(value as SelectCountryValue)}
                className='mb-6'
            />
        </>
    )
}

export default SelectCountry;