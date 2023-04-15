import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSpeaker = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M17.72 6.405c-.262.104-.451.395-.451.695 0 .404.233.646.75.775A4.248 4.248 0 0 1 21.24 12a4.246 4.246 0 0 1-3.224 4.125c-.549.138-.766.394-.728.857a.684.684 0 0 0 .407.581c.211.096.359.096.741-.002a5.787 5.787 0 0 0 2.87-1.761 5.753 5.753 0 0 0 1.411-4.216 5.701 5.701 0 0 0-3.062-4.674c-.813-.42-1.62-.63-1.935-.505m-.022 3.19a.775.775 0 0 0-.42.494c-.089.327.037.606.384.854.774.553.774 1.584-.001 2.118-.123.085-.258.21-.301.279-.304.492.063 1.14.646 1.14.475 0 1.22-.684 1.516-1.393.136-.325.238-.791.238-1.087 0-.96-.619-1.999-1.42-2.383-.239-.115-.423-.121-.642-.022'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSpeaker);
export default ForwardRef;
