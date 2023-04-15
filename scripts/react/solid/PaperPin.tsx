import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPaperPin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.4 3.044c-.291.056-.732.297-.966.527A2.015 2.015 0 0 0 5.84 5.02c0 .555.123.855.573 1.396.558.671.586.793.586 2.584s-.028 1.913-.586 2.584c-.45.541-.573.841-.573 1.396 0 .939.602 1.725 1.502 1.959.194.05.551.061 2.066.061h1.832v3.03c0 2.087.014 3.079.045 3.189.059.213.293.441.513.5.4.108.812-.12.92-.51.027-.097.042-1.218.042-3.179V15h1.832c1.515 0 1.872-.011 2.066-.061a1.991 1.991 0 0 0 1.502-1.959c0-.544-.132-.874-.545-1.361C17.031 10.931 17 10.799 17 9c0-1.799.031-1.931.615-2.619.413-.487.545-.817.545-1.361 0-.78-.418-1.469-1.094-1.8a2.441 2.441 0 0 0-.501-.18c-.27-.05-8.906-.046-9.165.004'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPaperPin);
export default ForwardRef;
