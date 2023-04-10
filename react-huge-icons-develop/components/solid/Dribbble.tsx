import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDribbble = (
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
            d='M2.097 13.4c.49 3.5 2.793 6.42 5.928 7.779.137-2.82.72-5.53 1.682-8.07a16.917 16.917 0 0 0-3.176-.299c-1.54 0-3.028.207-4.434.59Zm7.409 8.286c.797.205 1.633.314 2.494.314 2.87 0 5.458-1.21 7.282-3.146-1.99-2.529-4.818-4.448-8.103-5.393a24.86 24.86 0 0 0-1.673 8.225Zm10.74-4.027a9.953 9.953 0 0 0 1.74-6.184 18.435 18.435 0 0 1-3.286.294c-2.2 0-4.304-.387-6.243-1.093a25.44 25.44 0 0 0-.69 1.394c3.395 1.013 6.342 2.987 8.479 5.59Zm1.55-7.674a10.006 10.006 0 0 0-4.05-6.17 26.7 26.7 0 0 0-4.531 5.539 16.75 16.75 0 0 0 5.485.915c1.06 0 2.096-.098 3.097-.284ZM16.405 3.02A9.959 9.959 0 0 0 12 2a9.957 9.957 0 0 0-6.142 2.108 15.716 15.716 0 0 0 5.945 4.682 28.139 28.139 0 0 1 4.601-5.77Zm-11.66 2.1A9.965 9.965 0 0 0 2 11.874a18.339 18.339 0 0 1 4.53-.565c1.29 0 2.548.133 3.758.386.241-.54.5-1.072.775-1.595a17.214 17.214 0 0 1-6.32-4.982Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDribbble);
export default ForwardRef;
