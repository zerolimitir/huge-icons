import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMoneyBagCoin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M10.88 6.024c-.551.064-1.366.253-1.456.337-.02.02.081.164.235.337L9.93 7h4.14l.271-.302c.151-.17.255-.317.235-.335-.059-.054-.416-.159-.839-.247-.337-.071-.572-.085-1.557-.095a29.165 29.165 0 0 0-1.3.003m.488 6.054a2.537 2.537 0 0 0-1.794 1.811 3.03 3.03 0 0 0 0 1.222 2.541 2.541 0 0 0 1.326 1.631 2.53 2.53 0 0 0 2.374-.092 2.506 2.506 0 0 0 0-4.3c-.372-.225-.7-.317-1.194-.335-.329-.012-.483.002-.712.063'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyBagCoin);
export default ForwardRef;
