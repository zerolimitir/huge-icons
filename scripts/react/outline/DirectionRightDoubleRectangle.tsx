import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgDirectionRightDoubleRectangle = (
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
            fill='#000'
            fillRule='evenodd'
            d='M5.579 1.279C3.458 1.47 1.763 3.011 1.333 5.14c-.069.339-.073.734-.073 6.86s.004 6.521.073 6.86c.397 1.966 1.841 3.41 3.807 3.807.339.069.734.073 6.86.073s6.521-.004 6.86-.073c1.966-.397 3.41-1.841 3.807-3.807.069-.339.073-.734.073-6.86s-.004-6.521-.073-6.86c-.39-1.929-1.778-3.349-3.703-3.788l-.384-.088-6.34-.007c-3.487-.004-6.484.006-6.661.022M18.98 2.89c.538.184.878.4 1.304.826.426.426.642.766.826 1.304l.11.32v13.32l-.11.32c-.184.538-.4.878-.826 1.304-.426.426-.766.642-1.304.826l-.32.11H5.34l-.32-.11c-.538-.184-.878-.4-1.304-.826-.426-.426-.642-.766-.826-1.304l-.11-.32V5.34l.11-.32c.185-.539.4-.878.826-1.304.389-.388.701-.598 1.136-.765.501-.191.28-.186 7.248-.178l6.56.007.32.11M8.815 7.277a.778.778 0 0 0-.55.598c-.053.286.023.413 1.185 1.965.618.825 1.16 1.581 1.206 1.68.114.249.114.711 0 .96-.046.099-.588.855-1.206 1.68-.795 1.063-1.135 1.549-1.167 1.667a.739.739 0 0 0 .343.817c.189.117.541.123.732.013.138-.08 2.286-2.894 2.546-3.335.23-.391.316-.752.316-1.322 0-.57-.086-.931-.316-1.322-.235-.399-2.408-3.255-2.528-3.323a.884.884 0 0 0-.561-.078m5 0a.778.778 0 0 0-.55.598c-.053.286.023.413 1.185 1.965.618.825 1.16 1.581 1.206 1.68.114.249.114.711 0 .96-.046.099-.588.855-1.206 1.68-.795 1.063-1.135 1.549-1.167 1.667a.739.739 0 0 0 .343.817c.189.117.541.123.732.013.138-.08 2.286-2.894 2.546-3.335.23-.391.316-.752.316-1.322 0-.57-.086-.931-.316-1.322-.235-.399-2.408-3.255-2.528-3.323a.884.884 0 0 0-.561-.078'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDirectionRightDoubleRectangle);
export default ForwardRef;