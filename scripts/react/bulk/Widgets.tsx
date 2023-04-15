import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgWidgets = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M16.853 1.895c-.507.128-.574.183-2.265 1.863-.876.87-1.652 1.672-1.725 1.782-.248.377-.32.627-.318 1.12.001.504.07.734.335 1.129.086.128.848.921 1.707 1.775 1.453 1.445 1.573 1.554 1.856 1.693.591.289 1.201.29 1.791.002.288-.141.399-.242 1.878-1.714.865-.861 1.635-1.66 1.712-1.775.403-.604.439-1.462.089-2.087-.161-.287-3.136-3.291-3.493-3.526a2.17 2.17 0 0 0-.44-.223c-.266-.085-.864-.106-1.127-.039'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWidgets);
export default ForwardRef;
