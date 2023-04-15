import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSignalCellularNoInternetDashed = (
    props: SVGProps<SVGSVGElement>,
    ref: Ref<SVGSVGElement>
) => (
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
            d='M13.807 7.289c-.249.053-.465.281-.523.549-.062.291-.062 12.033 0 12.324.121.563.827.767 1.236.358a.65.65 0 0 0 .196-.358c.06-.279.061-12.062.001-12.321-.097-.421-.47-.647-.91-.552m-12 8c-.249.053-.465.281-.523.549-.06.283-.06 4.041 0 4.324.163.758 1.269.758 1.432 0 .058-.271.059-4.069.001-4.321-.097-.421-.47-.647-.91-.552m15.84.037a.743.743 0 0 0-.396.569c-.039.34.018.424.883 1.295l.803.81-.803.81c-.865.871-.922.955-.883 1.295a.741.741 0 0 0 1.02.594c.095-.04.435-.347.939-.85l.79-.788.79.788c.504.503.844.81.939.85a.741.741 0 0 0 1.02-.594c.039-.34-.018-.424-.882-1.295l-.804-.809.804-.811c.742-.749.806-.824.843-1 .122-.579-.321-1.022-.9-.9-.176.037-.251.101-1.001.844l-.811.803-.789-.787c-.504-.502-.843-.809-.938-.849a.734.734 0 0 0-.624.025'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSignalCellularNoInternetDashed);
export default ForwardRef;
