import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgWalletArrowDownClose = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M2 12v3.005l1.79-.014c1.747-.013 1.797-.016 2.07-.106 1.008-.334 1.712-1.045 2.026-2.046.079-.252.094-.384.094-.839 0-.454-.015-.588-.094-.84-.312-1-1.011-1.706-2.026-2.044-.274-.092-.319-.094-2.07-.107L2 8.995V12m17.7 2.316a.734.734 0 0 0-.398.413c-.054.128-.062.468-.062 2.499v2.351l-.41-.408c-.229-.228-.476-.435-.559-.469-.691-.287-1.311.47-.913 1.115.105.17 1.432 1.463 1.673 1.63.547.379 1.393.379 1.938-.001.094-.066.515-.467.936-.893.827-.835.886-.925.837-1.253-.032-.217-.209-.466-.393-.553-.179-.085-.515-.086-.681-.003-.07.035-.304.237-.518.449l-.39.385-.001-2.359c-.001-2.208-.005-2.369-.075-2.519-.181-.392-.607-.558-.984-.384'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWalletArrowDownClose);
export default ForwardRef;
