import BinSvg from './icons/bin.svg';
import WorkiManLogoSvg from './icons/workiman-logo.svg';
import LogoSvg from './icons/logo.svg';
import MenuSvg from './icons/menu.svg';
import ChartSvg from './icons/chart.svg';

export const icons = {
    Bin: (props) => <BinSvg {...props} />,
    WorkiManLogo: (props) => <WorkiManLogoSvg {...props} />,
    Logo: (props) => <LogoSvg {...props} />,
    Menu: (props) => <MenuSvg {...props} />,
    Chart: (props) => <ChartSvg {...props} />,
} 