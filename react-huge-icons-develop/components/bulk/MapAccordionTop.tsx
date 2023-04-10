import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMapAccordionTop = (
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
            d='M16.75 13.757v8.096c1.692-.456 3.539-1.724 4.528-2.472A1.86 1.86 0 0 0 22 17.887v-9.67c0-.52-.383-.908-.842-1.022a8.98 8.98 0 0 1-.407 1.585c-.419 1.194-1.096 2.434-1.935 3.401-.535.618-1.235 1.236-2.066 1.576Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M9.646 6.223a3.817 3.817 0 0 0-.896-.186v12.76c1.278.107 2.264.857 3.25 1.607.986.75 1.972 1.5 3.25 1.607v-7.993c-.887-.052-1.665-.465-2.281-.957-.668-.533-1.248-1.238-1.72-1.978-.924-1.447-1.603-3.3-1.603-4.814v-.046Z'
        />
        <path
            fill='currentColor'
            d='M2.722 8.666c.99-.748 2.836-2.015 4.528-2.471v12.76c-1.217.328-2.514 1.076-3.514 1.748-.708.476-1.736-.02-1.736-.873v-9.67c0-.584.255-1.141.722-1.494Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M19.49 8.337c.258-.736.406-1.458.406-2.068 0-2.363-1.995-4.279-4.457-4.279-2.283 0-4.165 1.649-4.426 3.774-.02.165-.03.334-.03.505 0 2.363 2.228 6.418 4.457 6.418 1.653 0 3.306-2.232 4.05-4.35Zm-4.05-.998a1.337 1.337 0 1 0 0-2.675 1.337 1.337 0 0 0 0 2.675Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapAccordionTop);
export default ForwardRef;
