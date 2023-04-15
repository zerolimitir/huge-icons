import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgAmbulance = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M14 12.998V19h1.991l.028-.223a2.028 2.028 0 0 1 1.337-1.667c.317-.116.971-.116 1.288 0a2.026 2.026 0 0 1 1.338 1.672l.028.228.218-.026a2.021 2.021 0 0 0 1.731-1.604c.032-.17.042-1.108.033-3.22l-.012-2.98-.093-.231a2.994 2.994 0 0 0-.242-.451c-.182-.272-3.04-2.963-3.382-3.185-.446-.29-.431-.288-2.453-.304L14 6.996v6.002m-7.42 4.049c-.541.103-1.128.563-1.371 1.073-.518 1.09.005 2.353 1.147 2.77.173.063.32.082.644.082s.471-.019.644-.082c1.142-.417 1.665-1.68 1.147-2.77a2.184 2.184 0 0 0-.911-.91 2.053 2.053 0 0 0-1.3-.163'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAmbulance);
export default ForwardRef;
