import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTextWrap = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M4.811 4.279a.76.76 0 0 0-.551.606c-.063.335.19.739.521.83.225.063 14.213.063 14.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.325-.832l-.168-.112-7.143-.006c-3.929-.004-7.201.008-7.272.025m0 5.999c-.52.126-.732.789-.385 1.202.237.282-.288.258 6.214.28l5.86.02.271.109c.658.263 1.082.69 1.341 1.346.092.235.104.321.104.765 0 .447-.012.529-.107.771-.215.548-.598.982-1.082 1.224-.453.227-.599.245-1.965.245h-1.241l.406-.41c.454-.46.533-.585.533-.85a.734.734 0 0 0-1.06-.664c-.104.049-.549.467-1.266 1.19-.92.926-1.114 1.141-1.15 1.274-.054.199-.054.241 0 .44.036.133.23.348 1.15 1.274.717.723 1.162 1.141 1.266 1.19a.734.734 0 0 0 1.06-.664c0-.265-.079-.39-.533-.85l-.406-.41h1.187c1.345 0 1.651-.03 2.202-.217.566-.192.977-.452 1.429-.904.452-.452.711-.861.906-1.43a3.684 3.684 0 0 0-.865-3.81 4.702 4.702 0 0 0-.522-.469 4.67 4.67 0 0 0-1.23-.562l-.388-.107-5.8-.007c-3.19-.004-5.858.007-5.929.024m0 6a.763.763 0 0 0-.551.607c-.063.335.19.739.521.83.22.062 4.218.062 4.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-2.143-.007c-1.179-.003-2.201.008-2.272.025'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTextWrap);
export default ForwardRef;