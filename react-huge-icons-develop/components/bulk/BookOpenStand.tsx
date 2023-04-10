import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBookOpenStand = (
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
            d='M22 17v-6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M11.25 5.445c-1.461-.873-3.394-1.28-4.854-1.437C5.628 3.925 5 4.536 5 5.29v7.51c0 .754.628 1.365 1.396 1.448 1.553.167 3.64.617 5.126 1.609.285.19.67.19.956 0 1.487-.992 3.573-1.442 5.126-1.609.768-.082 1.396-.694 1.396-1.448V5.29c0-.754-.628-1.365-1.396-1.282-1.46.157-3.393.564-4.854 1.437v10.24a6.44 6.44 0 0 0-.272.172.871.871 0 0 1-.956 0 6.44 6.44 0 0 0-.272-.172V5.445Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBookOpenStand);
export default ForwardRef;
