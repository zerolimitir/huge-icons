import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgWalletMinus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.42 2.044a4.83 4.83 0 0 0-.579.139 3.972 3.972 0 0 0-2.653 2.639C8.09 5.132 8 5.641 8 5.883V6h14v-.091c0-.243-.094-.789-.186-1.082a4.006 4.006 0 0 0-3.269-2.784c-.375-.052-6.759-.051-7.125.001M2 14v2h2.153c2.363 0 2.342.002 2.815-.248a2.3 2.3 0 0 0 .465-.368A1.91 1.91 0 0 0 8 14c0-.895-.597-1.678-1.477-1.936-.187-.055-.517-.064-2.37-.064H2v2m13.7 3.316a.745.745 0 0 0 .029 1.382c.13.054.535.062 3.188.062 2.068 0 3.105-.014 3.245-.044a.65.65 0 0 0 .358-.196c.409-.409.205-1.115-.358-1.236-.14-.03-1.176-.044-3.254-.043-2.878.001-3.057.005-3.208.075'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWalletMinus);
export default ForwardRef;
