import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgRoofHomeLock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.42 9.305a3.54 3.54 0 0 0-.66.245c-.31.152-.439.246-.702.508-.263.263-.356.392-.508.702-.253.516-.31.829-.31 1.688v.692l-.217.113c-.264.138-.657.538-.793.808-.202.399-.23.573-.23 1.439 0 .866.028 1.04.23 1.439.138.273.527.667.802.813.475.251.436.248 2.968.248s2.493.003 2.968-.248c.275-.146.664-.54.802-.813.202-.399.23-.573.23-1.439 0-.866-.028-1.04-.23-1.439-.136-.27-.529-.67-.793-.808l-.217-.113v-.692c0-1.005-.112-1.451-.512-2.033-.61-.891-1.746-1.336-2.828-1.11m1.126 1.589c.233.119.452.341.578.586.084.163.095.244.109.85l.015.67h-2.496l.015-.67c.014-.606.025-.687.109-.85a1.36 1.36 0 0 1 .824-.685c.216-.057.636-.008.846.099'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRoofHomeLock);
export default ForwardRef;
