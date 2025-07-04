// 表格数据
const mirrorsTableData = [
    {
        name: '阿里云',
        officialName: '阿里巴巴开源镜像站',
        icon: 'alibabacloud.svg',
        iconStyle: { verticalAlign: '-0.2em' },
        url: 'https://mirrors.aliyun.com',
        domain: 'mirrors.aliyun.com',
        ipv6: false,
        archlinux: true,
        kalilinux: true,
        deepin: true,
        rockylinux: 'incompatible',
        almalinux: true,
        epel: true,
        fedora: true,
        opencloudos: false,
        anolis: true,
        openkylin: true,
        alpinelinux: true,
        armbian: true,
        proxmox: false,
        linuxmint: true,
        gentoo: true,
        nix: false,
        raspberry: true,
        manjaro: true,
    },
    {
        name: '腾讯云',
        officialName: '腾讯软件源',
        icon: 'tencentcloud.ico',
        iconStyle: { verticalAlign: '-0.25em' },
        url: 'https://mirrors.tencent.com',
        domain: 'mirrors.tencent.com',
        ipv6: false,
        archlinux: true,
        kalilinux: true,
        deepin: false,
        rockylinux: true,
        almalinux: true,
        epel: true,
        fedora: true,
        opencloudos: true,
        anolis: false,
        openkylin: false,
        alpinelinux: true,
        armbian: false,
        proxmox: false,
        linuxmint: true,
        gentoo: true,
        nix: false,
        raspberry: false,
        manjaro: false,
    },
    {
        name: '华为云',
        officialName: '华为开源镜像站',
        icon: 'huaweicloud.ico',
        iconStyle: { verticalAlign: '-0.15em' },
        url: 'https://mirrors.huaweicloud.com',
        domain: 'mirrors.huaweicloud.com',
        ipv6: false,
        archlinux: true,
        kalilinux: true,
        deepin: true,
        rockylinux: 'incompatible',
        almalinux: true,
        epel: true,
        fedora: true,
        opencloudos: false,
        anolis: false,
        openkylin: false,
        alpinelinux: true,
        armbian: false,
        proxmox: false,
        linuxmint: true,
        gentoo: true,
        nix: false,
        raspberry: false,
        manjaro: true,
    },
    {
        name: '网易',
        officialName: '网易开源镜像站',
        icon: '163.ico',
        iconStyle: { verticalAlign: '-0.15em' },
        url: 'https://mirrors.163.com',
        domain: 'mirrors.163.com',
        ipv6: false,
        archlinux: true,
        kalilinux: false,
        deepin: true,
        rockylinux: true,
        almalinux: false,
        epel: false,
        fedora: true,
        opencloudos: false,
        anolis: false,
        openkylin: true,
        alpinelinux: false,
        armbian: false,
        proxmox: false,
        linuxmint: true,
        gentoo: true,
        nix: false,
        raspberry: false,
        manjaro: false,
    },
    {
        name: '火山引擎',
        officialName: '火山引擎开源软件镜像站',
        icon: 'volcengine.svg',
        iconStyle: { verticalAlign: '-0.25em' },
        url: 'https://developer.volcengine.com/mirror',
        domain: 'mirrors.volces.com',
        ipv6: false,
        archlinux: false,
        kalilinux: true,
        deepin: true,
        rockylinux: 'incompatible',
        almalinux: true,
        epel: true,
        fedora: true,
        opencloudos: false,
        anolis: false,
        openkylin: false,
        alpinelinux: true,
        armbian: false,
        proxmox: false,
        linuxmint: false,
        gentoo: false,
        nix: false,
        raspberry: false,
        manjaro: false,
    },
    {
        name: '清华大学',
        officialName: '清华大学开源软件镜像站',
        icon: 'tsinghua.png',
        iconStyle: { verticalAlign: '-0.3em' },
        url: 'https://mirrors.tuna.tsinghua.edu.cn',
        domain: 'mirrors.tuna.tsinghua.edu.cn',
        ipv6: true,
        archlinux: true,
        kalilinux: true,
        deepin: true,
        rockylinux: false,
        almalinux: false,
        epel: true,
        fedora: true,
        opencloudos: false,
        anolis: false,
        openkylin: false,
        alpinelinux: true,
        armbian: true,
        proxmox: true,
        linuxmint: true,
        gentoo: true,
        nix: true,
        raspberry: true,
        manjaro: true,
    },
    {
        name: '北京大学',
        officialName: '北京大学开源镜像站',
        icon: 'pku.ico',
        iconStyle: { verticalAlign: '-0.2em' },
        url: 'https://mirrors.pku.edu.cn/Mirrors',
        domain: 'mirrors.pku.edu.cn',
        ipv6: true,
        archlinux: true,
        kalilinux: false,
        deepin: false,
        rockylinux: true,
        almalinux: true,
        epel: true,
        fedora: false,
        opencloudos: false,
        anolis: false,
        openkylin: false,
        alpinelinux: false,
        armbian: false,
        proxmox: false,
        linuxmint: false,
        gentoo: false,
        nix: false,
        raspberry: false,
        manjaro: true,
    },
    {
        name: '浙江大学',
        officialName: '浙江大学镜像站',
        icon: 'zju.ico',
        iconStyle: { verticalAlign: '-0.15em' },
        url: 'https://mirrors.zju.edu.cn',
        domain: 'mirrors.zju.edu.cn',
        ipv6: true,
        archlinux: true,
        kalilinux: true,
        deepin: true,
        rockylinux: true,
        almalinux: true,
        epel: true,
        fedora: true,
        opencloudos: false,
        anolis: true,
        openkylin: false,
        alpinelinux: true,
        armbian: false,
        proxmox: false,
        linuxmint: true,
        gentoo: true,
        nix: false,
        raspberry: false,
        manjaro: true,
    },
    {
        name: '南京大学',
        officialName: '南京大学开源镜像站',
        icon: 'nju.ico',
        iconStyle: { verticalAlign: '-0.3em' },
        url: 'https://mirrors.nju.edu.cn',
        domain: 'mirrors.nju.edu.cn',
        ipv6: true,
        archlinux: true,
        kalilinux: true,
        deepin: true,
        rockylinux: true,
        almalinux: true,
        epel: true,
        fedora: true,
        opencloudos: true,
        anolis: true,
        openkylin: true,
        alpinelinux: true,
        armbian: true,
        proxmox: true,
        linuxmint: true,
        gentoo: true,
        nix: true,
        raspberry: true,
        manjaro: true,
    },
    {
        name: '兰州大学',
        officialName: '兰州大学开源软件镜像站',
        icon: 'lzu.png',
        iconStyle: { verticalAlign: '-0.25em' },
        url: 'https://mirror.lzu.edu.cn',
        domain: 'mirror.lzu.edu.cn',
        ipv6: true,
        archlinux: true,
        kalilinux: true,
        deepin: true,
        rockylinux: true,
        almalinux: true,
        epel: true,
        fedora: true,
        opencloudos: false,
        anolis: false,
        openkylin: true,
        alpinelinux: true,
        armbian: false,
        proxmox: false,
        linuxmint: true,
        gentoo: true,
        nix: false,
        raspberry: false,
        manjaro: true,
    },
    {
        name: '上海交通大学',
        officialName: '上海交通大学思源镜像站',
        icon: 'sjtu.ico',
        iconStyle: { verticalAlign: '-0.15em' },
        url: 'https://mirror.sjtu.edu.cn',
        domain: 'mirror.sjtu.edu.cn',
        ipv6: true,
        archlinux: true,
        kalilinux: true,
        deepin: true,
        rockylinux: true,
        almalinux: true,
        epel: true,
        fedora: 'incompatible',
        opencloudos: true,
        anolis: false,
        openkylin: true,
        alpinelinux: true,
        armbian: true,
        proxmox: false,
        linuxmint: true,
        gentoo: true,
        nix: false,
        raspberry: true,
        manjaro: true,
    },
    {
        name: '重庆邮电大学',
        officialName: '重庆邮电大学开源镜像站',
        icon: 'cqupt.ico',
        iconStyle: {},
        url: 'https://mirrors.cqupt.edu.cn',
        domain: 'mirrors.cqupt.edu.cn',
        ipv6: true,
        archlinux: true,
        kalilinux: true,
        deepin: true,
        rockylinux: false,
        almalinux: true,
        epel: true,
        fedora: true,
        opencloudos: false,
        anolis: false,
        openkylin: false,
        alpinelinux: true,
        armbian: true,
        proxmox: true,
        linuxmint: false,
        gentoo: false,
        nix: true,
        raspberry: true,
        manjaro: true,
    },
    {
        name: '中国科学技术大学',
        officialName: '中国科学技术大学开源软件镜像站',
        icon: 'ustc.png',
        iconStyle: { verticalAlign: '-0.2em' },
        url: 'https://mirrors.ustc.edu.cn',
        domain: 'mirrors.ustc.edu.cn',
        ipv6: true,
        archlinux: true,
        kalilinux: true,
        deepin: true,
        rockylinux: true,
        almalinux: false,
        epel: true,
        fedora: true,
        opencloudos: false,
        anolis: false,
        openkylin: false,
        alpinelinux: true,
        armbian: true,
        proxmox: true,
        linuxmint: true,
        gentoo: true,
        nix: true,
        raspberry: true,
        manjaro: true,
    },
    {
        name: '中国科学院软件研究所',
        officialName: 'ISCAS 开源镜像站',
        icon: 'iscas.png',
        iconStyle: { verticalAlign: '-0.25em' },
        url: 'https://mirror.iscas.ac.cn',
        domain: 'mirror.iscas.ac.cn',
        ipv6: false,
        archlinux: true,
        kalilinux: true,
        deepin: true,
        rockylinux: true,
        almalinux: true,
        epel: true,
        fedora: true,
        opencloudos: true,
        anolis: false,
        openkylin: true,
        alpinelinux: true,
        armbian: true,
        proxmox: true,
        linuxmint: true,
        gentoo: true,
        nix: true,
        raspberry: true,
        manjaro: true,
    },
]

// 表格列配置
const mirrorsTableColumns = [
    {
        colKey: 'name',
        title: !window.location.pathname.includes('/zh-Hant') ? '镜像站' : '鏡像站',
        align: 'left',
        width: '180',
        fixed: 'left',
    },
    {
        colKey: 'ipv6',
        title: 'IPv6',
        align: 'center',
        width: '70',
    },
    {
        colKey: 'epel',
        title: 'EPEL',
        align: 'center',
        width: '90',
        tooltip: !window.location.pathname.includes('/zh-Hant') ? 'EPEL (Extra Packages for Enterprise Linux) 是由 Fedora 组织维护的一个附加软件包仓库，它主要适用于除 Fedora 操作系统以外的红帽系 Linux 发行版' : 'EPEL (Extra Packages for Enterprise Linux) 是由 Fedora 組織維護的一個附加軟體包倉庫，它主要適用於除 Fedora 作業系統以外的紅帽系 Linux 發行版',
    },
    {
        colKey: 'archlinux',
        title: 'Arch Linux',
        align: 'center',
        width: '120',
    },
    {
        colKey: 'manjaro',
        title: 'Manjaro',
        align: 'center',
        width: '100',
    },
    {
        colKey: 'kalilinux',
        title: 'Kali Linux',
        align: 'center',
        width: '110',
    },
    {
        colKey: 'armbian',
        title: 'Armbian',
        align: 'center',
        width: '100',
    },
    {
        colKey: 'deepin',
        title: 'Deepin',
        align: 'center',
        width: '90',
    },
    {
        colKey: 'raspberry',
        title: 'Raspberry Pi OS',
        align: 'center',
        width: '150',
    },
    {
        colKey: 'linuxmint',
        title: 'Linux Mint',
        align: 'center',
        width: '120',
    },
    {
        colKey: 'proxmox',
        title: 'Proxmox VE',
        align: 'center',
        width: '120',
    },
    {
        colKey: 'fedora',
        title: 'Fedora',
        align: 'center',
        width: '90',
    },
    {
        colKey: 'rockylinux',
        title: 'Rocky Linux',
        align: 'center',
        width: '120',
    },
    {
        colKey: 'almalinux',
        title: 'AlmaLinux',
        align: 'center',
        width: '110',
    },
    {
        colKey: 'opencloudos',
        title: 'OpenCloudOS',
        align: 'center',
        width: '140',
    },
    {
        colKey: 'anolis',
        title: 'Anolis OS',
        align: 'center',
        width: '110',
    },
    {
        colKey: 'openkylin',
        title: 'openKylin',
        align: 'center',
        width: '110',
    },
    {
        colKey: 'alpinelinux',
        title: 'Alpine Linux',
        align: 'center',
        width: '130',
    },
    {
        colKey: 'gentoo',
        title: 'Gentoo',
        align: 'center',
        width: '90',
    },
    {
        colKey: 'nix',
        title: 'NixOS',
        align: 'center',
        width: '80',
    },
].map((item) => {
    if (['ipv6', 'epel', 'archlinux', 'manjaro', 'kalilinux', 'armbian', 'deepin', 'raspberry', 'linuxmint', 'proxmox', 'fedora', 'rockylinux', 'almalinux', 'opencloudos', 'anolis', 'openkylin', 'alpinelinux', 'gentoo', 'nix'].includes(item.colKey)) {
        item.sortType = 'all'
        item.sorter = (a, b) => {
            const getValue = (row) => {
                if (typeof row[item.colKey] === 'boolean') {
                    return row[item.colKey] ? 0 : 1
                }
                return 2
            }
            const aValue = getValue(a)
            const bValue = getValue(b)
            return aValue - bValue
        }
    }
    return item
})
