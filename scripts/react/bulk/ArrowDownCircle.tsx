import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowDownCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.7 7.316a.734.734 0 0 0-.398.413c-.054.13-.062.546-.062 3.299v3.151l-.91-.905c-.5-.498-.954-.928-1.008-.955-.127-.065-.478-.065-.604 0-.393.203-.564.676-.375 1.041.029.055.768.815 1.644 1.689 1.615 1.61 1.734 1.711 2.013 1.711.28 0 .397-.1 2.051-1.751 1.472-1.47 1.637-1.647 1.688-1.819.163-.544-.32-1.059-.884-.942-.184.038-.248.093-1.145.985l-.95.945-.001-3.159c-.001-2.986-.005-3.168-.075-3.319-.181-.392-.607-.558-.984-.384'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowDownCircle);
export default ForwardRef;
