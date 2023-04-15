import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgRoofHomeFavourite = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.612 10.821a1.989 1.989 0 0 0-.753.358c-.408.291-.709.73-.841 1.226-.077.29-.074.847.006 1.118.158.531.231.622 1.57 1.97.697.701 1.343 1.327 1.437 1.393.553.386 1.385.386 1.938 0 .094-.066.74-.692 1.437-1.393 1.339-1.348 1.412-1.439 1.57-1.97.08-.271.083-.828.006-1.118a2.207 2.207 0 0 0-.889-1.258 2.004 2.004 0 0 0-1.113-.376c-.645-.038-1.171.161-1.677.634l-.303.283-.303-.283c-.471-.44-.98-.648-1.575-.642a2.526 2.526 0 0 0-.51.058'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRoofHomeFavourite);
export default ForwardRef;
