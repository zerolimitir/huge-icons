import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgWalletArrowUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.42 2.044a4.83 4.83 0 0 0-.579.139 3.972 3.972 0 0 0-2.653 2.639C8.09 5.132 8 5.641 8 5.883V6h14v-.091c0-.243-.094-.789-.186-1.082a4.006 4.006 0 0 0-3.269-2.784c-.375-.052-6.759-.051-7.125.001M2 14v2h2.153c2.363 0 2.342.002 2.815-.248a2.3 2.3 0 0 0 .465-.368A1.91 1.91 0 0 0 8 14c0-.895-.597-1.678-1.477-1.936-.187-.055-.517-.064-2.37-.064H2v2m17.512 1.317a2.54 2.54 0 0 0-.42.185c-.214.125-1.611 1.482-1.739 1.69-.393.636.233 1.39.918 1.106.083-.034.33-.241.559-.469l.41-.408v2.268c0 1.505.015 2.336.044 2.473.163.758 1.269.758 1.432 0 .029-.137.044-.968.044-2.47v-2.265l.433.423c.487.475.601.532.935.468a.723.723 0 0 0 .617-.647c.041-.303-.061-.454-.871-1.278-.404-.411-.824-.804-.934-.872-.435-.27-.979-.347-1.428-.204'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWalletArrowUp);
export default ForwardRef;
