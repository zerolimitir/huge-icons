import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFilterThreeLineBig = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.44 5.075a2.137 2.137 0 0 0-1.332 1.275c-.083.221-.087.287-.087 1.65s.004 1.429.087 1.65a2.093 2.093 0 0 0 1.248 1.24c.317.116.971.116 1.288 0a2.093 2.093 0 0 0 1.248-1.24c.083-.221.087-.287.087-1.65s-.004-1.429-.087-1.65a2.138 2.138 0 0 0-1.369-1.286c-.288-.085-.801-.079-1.083.011m-8 4a2.137 2.137 0 0 0-1.332 1.275c-.083.221-.087.287-.087 1.65s.004 1.429.087 1.65c.526 1.385 2.162 1.79 3.251.806.203-.183.422-.516.533-.806.083-.221.087-.287.087-1.65s-.004-1.429-.087-1.65a2.138 2.138 0 0 0-1.369-1.286c-.288-.085-.801-.079-1.083.011m16.18 3.964a2.055 2.055 0 0 0-1.514 1.317c-.081.213-.085.291-.085 1.644 0 1.363.004 1.429.087 1.65.526 1.385 2.162 1.79 3.251.806.203-.183.422-.516.533-.806.083-.221.087-.287.087-1.65s-.004-1.429-.087-1.65a2.073 2.073 0 0 0-1.248-1.236c-.255-.089-.786-.128-1.024-.075'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFilterThreeLineBig);
export default ForwardRef;