import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgWindMid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.66 6.265c-1.422.143-2.609 1.042-3.157 2.391-.183.449-.288 1.164-.219 1.498.156.765 1.268.772 1.432.008.024-.113.044-.258.044-.322 0-.46.262-1.026.658-1.422.89-.89 2.274-.89 3.164 0 .446.446.658.956.658 1.582 0 .376-.062.645-.229.997-.272.574-.904 1.071-1.523 1.199-.143.03-1.222.044-3.328.044-2.125 0-3.182.014-3.322.044-.769.165-.757 1.274.015 1.435.159.032 1.131.041 3.454.031 3.184-.014 3.238-.016 3.569-.103a4.16 4.16 0 0 0 1.673-.902c.491-.449.932-1.208 1.096-1.885.12-.5.121-1.22 0-1.715A3.735 3.735 0 0 0 8.18 6.267a4.733 4.733 0 0 0-.52-.002'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWindMid);
export default ForwardRef;
