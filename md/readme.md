## 简介

> Cloudflare 免费计划节点国内访问速度慢，而优选节点可以完美解决该问题。

## 节点

|   IP   |   运营商   |
| ---- | ---- |
|   152.32.240.67   |   电信   |
|   119.28.61.35   |   电信 / 联通   |
|   104.17.12.99   |   电信   |
|   104.27.106.44   |   联通   |
|   104.27.84.21   |   联通   |
|   104.19.0.7   |   移动   |
|   104.19.2.3   |   移动   |
|   172.67.217.26   |   教育网   |
|   104.27.169.248   |   其他   |

<div class="tex-alert">
<p>节点会由于网络原因更换，以上可能表格不是最新的，请以实际为准。</p>
</div>

## 使用方法

### 加速我的网站

> 需要：Cloudflare 账号，智能 DNS 解析。

首先，前往「Cloudflare Partner」的站点登录。

<div class="tex-alert">
<p>
Cloudflare 官方已经停止 CNAME 接入，只能前往「Cloudflare Partner」接入。
</p>
</div>

> <code>.tk</code> / <code>.ml</code> / <code>.cf</code> / <code>.ga</code> / <code>.gq</code> 等域名是不能通过本方法实现的。

以 [萌精灵 CDN](https://cdn.moeelf.com/) 为例，打开其官网：https://cdn.moeelf.com/ 并登录你的 Cloudflare 账号。

然后点击页面右上角的「添加域名」将你的域名接入 Cloudflare 。

![](https://cdn.jsdelivr.net/gh/MyBlog-GitHub/image-upload@main/uPic/hPX5DZ.png)

输入域名并点击「添加」即可添加成功。

接下来点击主页列表里的「管理 DNS」进入管理界面。

![](https://cdn.jsdelivr.net/gh/MyBlog-GitHub/image-upload@main/uPic/mLAxAy.png)

接下来点击「添加新记录」添加一个新的记录。

![](https://cdn.jsdelivr.net/gh/MyBlog-GitHub/image-upload@main/uPic/F0QTaI.png)

![](https://cdn.jsdelivr.net/gh/MyBlog-GitHub/image-upload@main/uPic/F0QTaI.png)

然后进入你域名的 DNS 管理系统，注意是解析域名的地方。

找到「CNAME 接入」处的对应 CNAME 地址，将其设为相应的解析地址。

将域名「默认」记录指向 `cf.record.yfun.top` ，「境外」的记录解析至控制面板「CNAME 接入」处提供给您的官方地址。

> 原文地址：https://blog.yfun.top/posts/995700211/

### 加速其他网站

打开终端或 `cmd`，输入命令：`ping cf.record.yfun.top` 获取解析得到的 IP 地址。

编辑 `Hosts` 文件：

``` text
[IP]    [DOMAIN]
```

> `[IP]` :  Ping 得的节点 IP 地址。<br>
> `[DOMAIN]` : 需要加速的 Cloudflare 服务域名。<br>
> 中间以 `Tab` 分割。<br>

示例：

```text
104.19.2.3  dash.cloudflare.com
```

## 备注

服务使用 「D 监控」监控节点。如果节点宕机，则切换至其他节点，确保服务正常。

您也可以尝试 `cfpro.record.yfun.top`，它会自动更换所解析的 IP，但不保证可以正常使用。

