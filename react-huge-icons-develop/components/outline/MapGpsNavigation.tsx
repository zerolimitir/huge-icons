import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMapGpsNavigation = (
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
            stroke='currentColor'
            strokeWidth={1.5}
            d='M8 18.785c-1.411.158-3.054 1.081-4.264 1.894-.708.476-1.736-.02-1.736-.872v-9.67c0-.585.255-1.142.722-1.495.782-.591 2.1-1.507 3.455-2.09a7.73 7.73 0 0 1 1.13-.396M8 18.786c3.318-.372 4.682 3.56 8 3.19m-8-3.19v-7.522m8 10.711c1.867-.209 4.14-1.757 5.278-2.617A1.86 1.86 0 0 0 22 17.863v-9.67c0-.853-1.028-1.348-1.736-.872a18.39 18.39 0 0 1-1.303.802M16 21.975V12.73m-4.338-3.81-1.515-.504a.5.5 0 0 1-.039-.934l4.643-1.99a.5.5 0 0 1 .656.657l-1.99 4.642a.5.5 0 0 1-.933-.039l-.505-1.515a.5.5 0 0 0-.317-.316Z'
        />
        <path stroke='currentColor' strokeWidth={1.5} d='M18.9 8a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z' />
    </svg>
);
const ForwardRef = forwardRef(SvgMapGpsNavigation);
export default ForwardRef;
