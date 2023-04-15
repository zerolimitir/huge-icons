import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgWalletArrowLeftClose = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M2 12v3.005l1.79-.014c1.747-.013 1.797-.016 2.07-.106 1.008-.334 1.712-1.045 2.026-2.046.079-.252.094-.384.094-.839 0-.454-.015-.588-.094-.84-.312-1-1.011-1.706-2.026-2.044-.274-.092-.319-.094-2.07-.107L2 8.995V12m15.472 4.241a.931.931 0 0 0-.304.133c-.238.165-1.502 1.461-1.644 1.686-.275.434-.35.957-.205 1.426.126.409.283.611 1.074 1.388.824.81.975.912 1.278.871a.723.723 0 0 0 .647-.617c.064-.334.007-.448-.468-.935l-.423-.433h2.265c1.502 0 2.333-.015 2.47-.044.758-.163.758-1.269 0-1.432-.137-.029-.968-.044-2.473-.044h-2.268l.408-.41c.228-.229.435-.476.469-.559a.752.752 0 0 0-.826-1.03'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWalletArrowLeftClose);
export default ForwardRef;
