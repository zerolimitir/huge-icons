import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTemperatureMinus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M17.811 3.278a.763.763 0 0 0-.551.607c-.063.335.19.739.521.83.22.062 4.218.062 4.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-2.143-.007c-1.179-.003-2.201.008-2.272.025M11.7 12.316a.734.734 0 0 0-.398.413c-.051.122-.062.349-.062 1.28v1.131l-.22.115c-.261.136-.659.547-.8.826-.295.58-.29 1.291.011 1.856.139.261.571.693.832.832a2.033 2.033 0 0 0 1.874 0c.261-.139.693-.571.832-.832a2.039 2.039 0 0 0 .006-1.868c-.13-.257-.614-.742-.845-.845l-.17-.076-.001-1.144c-.001-1.027-.008-1.16-.075-1.304-.181-.392-.607-.558-.984-.384'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTemperatureMinus);
export default ForwardRef;
