import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBoxArrowDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8 5.912v3.912l.104.208c.233.468.735.671 1.239.502.17-.058.331-.198 1.177-1.033C11.567 8.47 11.608 8.44 12 8.44c.392 0 .433.03 1.48 1.061.846.835 1.007.975 1.177 1.033.504.169 1.006-.034 1.239-.502L16 9.824V2H8v3.912m11.7 9.404a.734.734 0 0 0-.398.413c-.054.128-.062.468-.062 2.499v2.351l-.41-.408c-.229-.228-.476-.435-.559-.469-.691-.287-1.311.47-.913 1.115.105.17 1.432 1.463 1.673 1.63.547.379 1.393.379 1.938-.001.094-.066.515-.467.936-.893.827-.835.886-.925.837-1.253-.032-.217-.209-.466-.393-.553-.179-.085-.515-.086-.681-.003-.07.035-.304.237-.518.449l-.39.385-.001-2.359c-.001-2.208-.005-2.369-.075-2.519-.181-.392-.607-.558-.984-.384'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBoxArrowDown);
export default ForwardRef;
