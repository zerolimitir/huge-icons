import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMoneyArrowDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.58 7.095A.976.976 0 0 0 5.002 8c0 .555.444.999.998.999a.998.998 0 1 0-.42-1.904m5.858 2.98a1.984 1.984 0 0 0-.872.542c-.78.813-.759 2.04.05 2.816.814.781 2.04.76 2.817-.049A1.91 1.91 0 0 0 14 12c0-.895-.597-1.678-1.477-1.936a2.275 2.275 0 0 0-1.085.011m8.262 3.241a.734.734 0 0 0-.398.413c-.054.128-.062.468-.062 2.499v2.351l-.41-.408c-.229-.228-.476-.435-.559-.469-.691-.287-1.311.47-.913 1.115.105.17 1.432 1.463 1.673 1.63.547.379 1.393.379 1.938-.001.094-.066.515-.467.936-.893.827-.835.886-.925.837-1.253-.032-.217-.209-.466-.393-.553-.179-.085-.515-.086-.681-.003-.07.035-.304.237-.518.449l-.39.385-.001-2.359c-.001-2.208-.005-2.369-.075-2.519-.181-.392-.607-.558-.984-.384'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyArrowDown);
export default ForwardRef;
