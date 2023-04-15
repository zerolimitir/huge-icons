import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTag = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.42 2.044c-.611.087-1.38.421-1.866.81-.511.409-3.259 2.821-3.481 3.054-.442.467-.787 1.114-.966 1.812l-.087.34v10.48l.09.352c.126.497.307.909.573 1.306.244.363.686.827 1.017 1.067.295.214.952.519 1.34.622.339.09.353.09 3.816.103 3.054.011 3.518.005 3.818-.051a3.88 3.88 0 0 0 2.12-1.109 4.093 4.093 0 0 0 1.096-1.938l.09-.352V8.06l-.094-.357c-.19-.716-.516-1.328-.959-1.795-.206-.217-2.812-2.504-3.455-3.032-.813-.667-1.979-.985-3.052-.832m.963 3.999c.802.147 1.456.829 1.584 1.652C14.153 8.894 13.209 10 12 10a2.016 2.016 0 0 1-1.967-1.695c-.1-.642.099-1.244.563-1.709.489-.488 1.102-.678 1.787-.553'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTag);
export default ForwardRef;
