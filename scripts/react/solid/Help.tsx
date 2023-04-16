import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHelp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M10.34 3.025c-1.269.123-2.251.39-3.28.893a9.009 9.009 0 0 0-5.02 7.242c-.031.311-.041 1.436-.031 3.48l.014 3.02.11.378c.437 1.504 1.584 2.572 3.093 2.879.395.081.521.083 4.341.083 3.223 0 4.025-.011 4.441-.059a8.992 8.992 0 0 0 7.075-5.001 8.974 8.974 0 0 0-1.07-9.571c-1.215-1.517-2.984-2.648-4.853-3.102-.889-.217-1.134-.237-2.96-.248a64.757 64.757 0 0 0-1.86.006m2.46 2.322c.537.106 1.144.405 1.611.792.572.473 1.051 1.251 1.233 2.001a4.045 4.045 0 0 1-.016 1.782c-.298 1.143-1.132 2.11-2.188 2.538-.379.153-.573.272-.631.389-.026.053-.05.358-.057.738-.012.646-.012.646-.133.818-.166.237-.346.334-.619.334s-.453-.097-.619-.334c-.119-.169-.121-.18-.135-.761-.025-1.042.103-1.468.586-1.952.198-.198.338-.292.641-.434.751-.353.825-.398 1.107-.678.697-.694.859-1.702.416-2.602-.232-.472-.706-.887-1.256-1.1-.205-.08-.312-.093-.74-.094-.447 0-.529.012-.771.107-.876.344-1.371 1.013-1.471 1.989-.031.312-.058.408-.149.538A.677.677 0 0 1 9 9.739c-.273 0-.453-.098-.619-.334-.116-.165-.121-.187-.113-.559.023-1.078.588-2.17 1.466-2.83a4.032 4.032 0 0 1 1.821-.736c.327-.04.848-.012 1.245.067m-.46 10.719c.369.126.66.538.66.934 0 .527-.473 1-1 1-.242 0-.521-.119-.701-.299a.984.984 0 0 1 .001-1.403.977.977 0 0 1 1.04-.232'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHelp);
export default ForwardRef;