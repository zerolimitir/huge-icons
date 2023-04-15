import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgWalletArrowLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.42 2.044a4.83 4.83 0 0 0-.579.139 3.972 3.972 0 0 0-2.653 2.639C8.09 5.132 8 5.641 8 5.883V6h14v-.091c0-.243-.094-.789-.186-1.082a4.006 4.006 0 0 0-3.269-2.784c-.375-.052-6.759-.051-7.125.001M2 14v2h2.153c2.363 0 2.342.002 2.815-.248a2.3 2.3 0 0 0 .465-.368A1.91 1.91 0 0 0 8 14c0-.895-.597-1.678-1.477-1.936-.187-.055-.517-.064-2.37-.064H2v2m15.472 3.241a.931.931 0 0 0-.304.133c-.238.165-1.502 1.461-1.644 1.686-.275.434-.35.957-.205 1.426.126.409.283.611 1.074 1.388.824.81.975.912 1.278.871a.723.723 0 0 0 .647-.617c.064-.334.007-.448-.468-.935l-.423-.433h2.265c1.502 0 2.333-.015 2.47-.044.758-.163.758-1.269 0-1.432-.137-.029-.968-.044-2.473-.044h-2.268l.408-.41c.228-.229.435-.476.469-.559a.752.752 0 0 0-.826-1.03'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWalletArrowLeft);
export default ForwardRef;
