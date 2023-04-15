import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCardArrowDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M2 9v2h20V7H2v2m17.7 6.316a.734.734 0 0 0-.398.413c-.053.127-.062.419-.062 1.999v1.851l-.41-.408c-.229-.228-.476-.435-.559-.469-.691-.287-1.311.47-.913 1.115.105.17 1.432 1.463 1.673 1.63.547.379 1.393.379 1.938-.001.094-.066.515-.467.936-.893.827-.835.886-.925.837-1.253-.032-.217-.209-.466-.393-.553-.179-.085-.515-.086-.681-.003-.07.035-.304.237-.518.449l-.39.385-.001-1.859c-.001-1.722-.006-1.871-.075-2.019-.181-.392-.607-.558-.984-.384m-14.12.779a.976.976 0 0 0-.578.905c0 .555.444.999.998.999a.998.998 0 1 0-.42-1.904'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCardArrowDown);
export default ForwardRef;
