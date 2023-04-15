import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMoneyBag = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M10.88 6.024c-.551.064-1.366.253-1.456.337-.02.02.081.164.235.337L9.93 7h4.14l.271-.302c.151-.17.255-.317.235-.335-.059-.054-.416-.159-.839-.247-.337-.071-.572-.085-1.557-.095a29.165 29.165 0 0 0-1.3.003M8.698 16.315a.752.752 0 0 0-.44.785c.054.363.253.533 1.122.958 1.026.503 1.682.674 2.58.674.638 0 .965-.053 1.6-.258.749-.242 1.83-.776 2.015-.996A.916.916 0 0 0 15.76 17c0-.267-.202-.568-.458-.685-.279-.127-.4-.101-1.051.221-1.313.65-2.022.806-2.897.641-.437-.083-.913-.27-1.624-.638-.632-.326-.75-.352-1.032-.224'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyBag);
export default ForwardRef;
