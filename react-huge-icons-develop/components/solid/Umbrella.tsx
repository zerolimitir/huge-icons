import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgUmbrella = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M4 10.75h3.263c.08-2.979.517-5.682 1.197-7.722.217-.65.462-1.246.737-1.769-3.255 1.169-6.095 4.199-6.941 7.513-.273 1.07.64 1.978 1.744 1.978Zm8-10a7.27 7.27 0 0 0-.608.025c-.111.095-.232.22-.36.382-.405.514-.802 1.303-1.149 2.345-.62 1.861-1.039 4.397-1.119 7.248h2.486v8a1.25 1.25 0 1 1-2.5 0 .75.75 0 0 0-1.5 0 2.75 2.75 0 1 0 5.5 0v-8h2.486c-.08-2.85-.499-5.387-1.12-7.248-.346-1.042-.744-1.831-1.148-2.345a2.661 2.661 0 0 0-.36-.382A7.542 7.542 0 0 0 12 .75Zm3.54 2.278c.68 2.04 1.116 4.743 1.197 7.722H20c1.105 0 2.017-.908 1.744-1.978-.846-3.314-3.686-6.344-6.941-7.513.275.523.52 1.119.737 1.769Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUmbrella);
export default ForwardRef;
