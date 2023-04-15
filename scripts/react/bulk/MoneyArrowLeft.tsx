import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMoneyArrowLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.58 7.095A.976.976 0 0 0 5.002 8c0 .555.444.999.998.999a.998.998 0 1 0-.42-1.904m5.858 2.98a1.984 1.984 0 0 0-.872.542c-.78.813-.759 2.04.05 2.816.814.781 2.04.76 2.817-.049A1.91 1.91 0 0 0 14 12c0-.895-.597-1.678-1.477-1.936a2.275 2.275 0 0 0-1.085.011m6.034 5.166a.931.931 0 0 0-.304.133c-.238.165-1.502 1.461-1.644 1.686-.275.434-.35.957-.205 1.426.126.409.283.611 1.074 1.388.824.81.975.912 1.278.871a.723.723 0 0 0 .647-.617c.064-.334.007-.448-.468-.935l-.423-.433h2.265c1.502 0 2.333-.015 2.47-.044.758-.163.758-1.269 0-1.432-.137-.029-.968-.044-2.473-.044h-2.268l.408-.41c.228-.229.435-.476.469-.559a.752.752 0 0 0-.826-1.03'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyArrowLeft);
export default ForwardRef;
