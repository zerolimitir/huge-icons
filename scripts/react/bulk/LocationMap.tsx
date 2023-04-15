import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLocationMap = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.66 6.52a2.512 2.512 0 0 0-1.887 1.36c-.204.419-.266.681-.266 1.12 0 .69.241 1.271.732 1.761.49.491 1.071.732 1.761.732s1.271-.241 1.761-.732c.491-.49.732-1.071.732-1.761 0-.438-.062-.7-.265-1.12-.455-.937-1.523-1.503-2.568-1.36m-6.24 9.527c-.501.096-1.092.532-1.33.982-.182.344-.957 2.235-1.028 2.51-.116.443-.059.913.166 1.381.138.286.566.714.852.852.503.242.026.228 7.92.228s7.417.014 7.92-.228c.286-.138.714-.566.852-.852.224-.467.281-.938.167-1.378-.068-.26-.887-2.253-1.05-2.555-.233-.43-.832-.85-1.346-.944-.307-.056-12.828-.052-13.123.004'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLocationMap);
export default ForwardRef;
