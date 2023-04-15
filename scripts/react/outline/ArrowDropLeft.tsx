import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowDropLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M14.67 5.762a2.667 2.667 0 0 0-.91.28c-.509.256-6.349 3.693-6.537 3.846-1.315 1.076-1.316 3.147-.002 4.222.222.181 6.141 3.657 6.599 3.875.4.19.737.266 1.18.266.462 0 .792-.078 1.22-.289.576-.284.95-.665 1.239-1.262.096-.198.199-.468.228-.6.078-.351.078-7.849 0-8.2-.071-.321-.362-.912-.575-1.166a2.79 2.79 0 0 0-2.442-.972m.787 1.56c.255.096.532.346.67.603l.093.175.011 3.826c.011 3.806.01 3.828-.074 4.052-.222.594-.953.935-1.552.724-.288-.102-6.363-3.669-6.526-3.833-.25-.25-.337-.474-.337-.869s.087-.619.337-.869c.154-.155 6.224-3.725 6.512-3.831.227-.083.611-.073.866.022'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowDropLeft);
export default ForwardRef;
